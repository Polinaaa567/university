#include <stdio.h>
#include "mpi.h"
#include "iostream"

using namespace std;

int main(int argc, char *argv[])
{
int rank;
int size;
int n=9;
MPI_Status stat;
MPI_Init(&argc, &argv);
MPI_Comm_rank(MPI_COMM_WORLD, &rank);
MPI_Comm_size(MPI_COMM_WORLD, &size);

if(rank==0)
{
int **a=new int*[3*size];
    a[0]=new int[3*size*n];
    for(int i = 1; i < 3*size; i++)
        a[i]=a[i-1]+n;

    for(int i = 0; i < 3*size; i++)
        for(int j = 0; j < n; j++)
            a[i][j]=0;

    for(int i = 1; i < size; i++)
        MPI_Recv(a[3*i],3*n,MPI_INT,i,777,MPI_COMM_WORLD, &stat);

    for (int i = 0; i < 3*size; i++){
		for (int j = 0; j < n; j++)
			cout << a[i][j] << " ";
		cout << endl;
    }
delete []a[0];
delete []a;

}
else
{
int **b=new int*[3];
    b[0]=new int[3*n];
    for(int i = 1; i < 3; i++)
        b[i]=b[i-1]+n;

    for(int i = 0; i < 3; i++)
        for(int j = 0; j < n; j++)
	    b[i][j]=rank;

    MPI_Send(&b[0][0],3*n,MPI_INT,0,777,MPI_COMM_WORLD);

//sleep(rank);

double s=0;
    for(int i = 0; i < rank*1000000; i++)
	s+=0.0000000001;

printf( "rank = %d, b: \n",rank );
    for(int i = 0; i < 3; i++)
    {
        for(int j = 0; j < n; j++)
	        cout<<b[i][j]<<" ";
    cout<<endl;
    }
cout<<endl;

delete []b[0];
delete []b;
}

MPI_Finalize();
return 0;
}

