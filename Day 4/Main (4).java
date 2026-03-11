/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
// Generic class
/*class GenericClass<T> {
    T value;

    // Constructor
    GenericClass(T value) {
        this.value = value;  // the compile time is more usefull time to get any error in the compile time we can easily rectify this error 
    }

    // Method to display the value
    void display() {
        System.out.println("Stored value: " + value);
    }
}

// Main class
public class Main {
    public static void main(String[] args) {

        // Integer type
        GenericClass<Integer> obj1 = new GenericClass<>(100);
        obj1.display();

        // String type
        GenericClass<String> obj2 = new GenericClass<>("Hello Chandini");
        obj2.display();
    }
}
*/
/*
// Functional Interface
@FunctionalInterface
interface Operation {
    int operate(int a, int b);
}

public class Main {

    // Method that calls the operation
    public static int calculate(int a, int b, Operation op) {
        return op.operate(a, b);
    }

    public static void main(String[] args) {

        // Lambda expressions
        Operation add = (a, b) -> a + b;
        Operation sub = (a, b) -> a - b;
        Operation mul = (a, b) -> a * b;
        Operation div = (a, b) -> a / b;

        System.out.println("Addition: " + calculate(5, 4, add));
        System.out.println("Subtraction: " + calculate(5, 4, sub));
        System.out.println("Multiplication: " + calculate(5, 4, mul));
        System.out.println("Division: " + calculate(8, 4, div));
    }
}*/

//methods in stream Api //predicator 
/*import java.util.function.Function;

public class Main {
    public static void main(String[] args) {


        // Function<String, Integer> length = s -> s.length();

        // System.out.println(length.apply("Java"));
    }
}*/

//Supplier<T> Methood ;
/*import java.util.function.Supplier;

public class Main {
    public static void main(String[] args) {

        Supplier<Double> random = () -> Math.random();

        System.out.println(random.get());
    }
}
*/
/*Stream Api  enhancemnet of java 8th version
stream is nothing but a flow of a data 
*/


/*import java.util.*;

public class Main {
    public static void main(String[] args) {

        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);

        nums.stream()
            .filter(n -> n % 2 == 0)   // Lambda expression to filter even numbers
            .forEach(System.out::println);
    }
}
*/

// Creation of Optional operations
/*import java.util.Optional;

public class Main {
    public static void main(String[] args) {

        Optional<String> o1 = Optional.of("Java");          // value present
        Optional<String> o2 = Optional.ofNullable(null);    // nullable value
        Optional<String> o3 = Optional.empty();             // empty optional

        // Check if value is present
        System.out.println(o1.isPresent());

        // Get value
        System.out.println(o1.get());

        // Default value if empty
        System.out.println(o2.orElse("Default Value"));

        // Execute if value exists
        o1.ifPresent(val -> System.out.println("Value: " + val));

        // Check empty optional
        System.out.println(o3.isPresent());
    }
}*/
/*package time;

import java.time.*;

package time;

import java.time.*;

public class Main {
    public static void main(String[] args) {

        // create a local date and time
        /*
        LocalDate dob = LocalDate.now();
        LocalTime time = LocalTime.now();
        LocalDateTime dt = LocalDateTime.now();
        */

/*        ZonedDateTime ztd = ZonedDateTime.now();

        System.out.println("Current zone date time: " + ztd);
    }
}*/

