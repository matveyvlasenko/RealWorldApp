package org.example;

public class Main {
    public static void main(String[] args) {
        User Bob = new User("Bob", "Jones", "BobJones");
        User Mark = new User("Mark", "Dones", "MarkDones");
        User Jeff = new User("Jeff", "Apple", "JeffApple");
        User Nick = new User("Nick", "Rough", "BobJones");
        User Mike = new User("Mike", "Tough", "BobJones");

        UsersCollection usersCollection = new UsersCollection();
        usersCollection.addUser(Bob);
        usersCollection.addUser(Mark);
        usersCollection.addUser(Jeff);
        usersCollection.addUser(Nick);
        usersCollection.addUser(Mike);

        System.out.println(usersCollection);





    }
}
