/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/

/*public class Main
{
	public static void main(String[] args) {
		int a=10,b=0;
		a-=b;
		System.out.print(a);
	}
}*/

/*public class Main
{
    public static void main(String[] args){
        byte a,b,c;
        a=b=c=10;
        b=b+(byte)1;   //b = (byte)(b + 1);   // correct typecasting
        a+=1;
        a++;
    }
}*/

public class Main
{
    public static void main(String[] args){
        int a=20;
        switch('a'){ //for switch the args are mandatory all other are optional.
            case 1: // the cases are the case lables 
                a = 1;
                
            case 2: 
                a = 20;
                
            case 3: 
                a = 3;
                
            default:
                System.out.println("No case matched");
            break; //break is not madatory for the default and each case also.
        }
        System.out.println(a);
    }
}

