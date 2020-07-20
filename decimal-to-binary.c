/**

Program to convert decimals 0-255 to binary
Patrick
June 29, 2020
Free to use

**/

#include <stdio.h>

int decimalToBinary () //function to do conversion
{
	/** initialize variables **/
	int dec;
	int i;
	int result[7]; //empty array for our result
	
	/** provide user input for decimal limited to between 0 and 255 **/
	printf ("Input decimal number between 0 and 255: \n");
	scanf ("%d", &dec);
  
	/** iteration to put result of computation into array **/
	for (i = 0; i < 8; i++) //want to iterate over each empty array slot
    {
		result[i] = dec % 2; //binary taken from remainder of decimal
		dec = dec / 2; //decimal then divided by 2 to obtain quotient which is assigned to dec for next computation
    }

	/** iteration to print array in reverse to obtain binary **/
	for (i = 7; i > -1; i--) //since computation creates binary backward we need to iterate from last slot in array to first
    {
		printf ("%d", result[i]);
    }
	
	printf("\n");
	return 0;
}

int main() //call conversion function
{
	decimalToBinary();
}