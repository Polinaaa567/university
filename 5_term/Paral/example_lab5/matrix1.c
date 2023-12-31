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

int **a=new int*[n];
a[0]=new int[n*n];
    for (int i = 1; i < n; i++)
	a[i]=a[i-1]+n;
    
if(rank == 0) 
{
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
    	    a[i][j]=10*(i+1)+j+1;
    	    
            MPI_Send(&a[0][0], 2*n, MPI_INT, 1, 777, MPI_COMM_WORLD);
}

if(rank == 1)
{
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
    	    a[i][j]=0;

            MPI_Recv(&a[0][0], 2*n, MPI_INT, 0, 777, MPI_COMM_WORLD, &stat);
}

usleep(10000*rank);

printf( "rank = %d, a: \n",rank ); 
for (int i = 0; i < n; i++)
{
    for (int j = 0; j < n; j++)
    	cout<<a[i][j]<<" ";
    cout<<endl;
}


delete []a[0];
delete []a;
    
        MPI_Finalize();
        return 0;
}

