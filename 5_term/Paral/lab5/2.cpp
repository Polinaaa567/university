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
int **a=new int*[size];
    a[0]=new int[size*n];
    for(int i = 1; i < size; i++)
        a[i]=a[i-1]+n;

    for(int i = 0; i < size; i++)
        for(int j = 0; j < n; j++)
            a[i][j]= 0;

    for(int i = 1; i < size; i++)
        MPI_Recv(&a[i][0],n,MPI_INT,i,777,MPI_COMM_WORLD,&stat);

		for (int i = 0; i < size; i++){
			for (int j = 0; j < n; j++)
				cout << a[i][j] << " ";
			cout << endl;
        }
    delete []a[0];
    delete []a;
}
else {
    int *b=new int[n];
    // for(int i = 1; i < n; i++)
    //     b[i]=b[i-1]+n;

    for(int i = 0; i < n; i++)
        // for(int j = 0; j < n; j++)
	    b[i]=rank;

    MPI_Send(&b[0],n,MPI_INT,0,777,MPI_COMM_WORLD);

//sleep(rank);

    double s=0;
    for(int i = 0; i < rank*1000000; i++)
	    s+=0.0000000001;

    printf( "rank = %d, b: \n",rank );
    for(int i = 0; i < n; i++) {
	    cout<<b[i]<<" ";
    }
    cout<<endl;

    delete []b;
}

MPI_Finalize();
return 0;
}

