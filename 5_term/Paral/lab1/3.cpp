#include <iostream>
#include <mpi.h>
#include <stdint.h>

using namespace std;

int main(int argc, char *argv[])
{
    MPI_Init(&argc, &argv);

    printf("Timer = %f ", MPI_Wtick());
    
    MPI_Finalize();
    return 0;
}

