#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <pthread.h>

void *print_message_function( void *ptr);

int main()
{
     pthread_t thread1, thread2, thread3, thread4, thread5;
     char *message1 = "Thread 1";
     char *message2 = "Thread 2";
     int  threadReturn1, threadReturn2, threadReturn3, threadReturn4, threadReturn5;

     threadReturn1 = pthread_create( &thread1, NULL, print_message_function(), (void*) message1);

     pthread_join( thread1, NULL);

     printf("Thread 1 returns: %d\n",threadReturn1);


/*     threadReturn2 = pthread_create( &thread2, NULL, print_message_function, (void*) message2);
     threadReturn3 = pthread_create( &thread3, NULL, print_message_function, (void*) "this is thread 3");
     threadReturn4 = pthread_create( &thread4, NULL, print_message_function, (void*) "Thread 4");
     threadReturn5 = pthread_create( &thread5, NULL, print_message_function, (void*) "from thread 5");

     pthread_join( thread1, NULL);
     pthread_join( thread2, NULL); 
     pthread_join( thread3, NULL); 
     pthread_join( thread4, NULL); 
     pthread_join( thread5, NULL); 

     printf("Thread 1 returns: %d\n",threadReturn1);
     printf("Thread 2 returns: %d\n",threadReturn2);
     printf("Thread 3 returns: %d\n",threadReturn3);
     printf("Thread 4 returns: %d\n",threadReturn4);
     printf("Thread 5 returns: %d\n",threadReturn5);
     exit(0);
     */
}

void *print_message_function( void *ptr)
{
     char *message;
     message = (char *) ptr;
     sleep(s);
     printf("%s \n", message);
}