package org.example;

import java.util.ArrayList;
import java.util.List;

public class UsersCollection {
    List<User> userList = new ArrayList<User>();


    public void addUser( User user){
        userList.add(user);
    }

    public void removeUser(User user){
        userList.remove(user);
    }
    public void removeAll(){
        userList.removeAll(userList);
    }
    public User getUser(User user){
        return user;
    }

}
