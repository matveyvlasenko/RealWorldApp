package realWorldApp.backend;

import java.io.Serializable;

public class User implements Serializable{
	  public String name;
	  public String password;
	  public User() {
	        super();
	    }
	     
	    public User(String name, String password) {
	        super();
	        this.name = name;
	        this.password = password;
	    }
	 
	    public String getName() {
	        return name;
	    }
	 
	    public void setName(String name) {
	        this.name = name;
	    }
	 
	    public String getPassword() {
	        return password;
	    }
	 
	    public void setpassword(String password) {
	        this.password = password;
	    }
}
