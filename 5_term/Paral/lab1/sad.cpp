#include <iostream>
#include <mpi.h>
#include <stdint.h>

using namespace std;

int main(int argc, char *argv[])
{
    int my_rank;
    int size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &my_rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);
    printf("Hello world! I'm rank (processor number) %d of %d processor \n",my_rank, size);
    MPI_Finalize();
    return 0;
}

