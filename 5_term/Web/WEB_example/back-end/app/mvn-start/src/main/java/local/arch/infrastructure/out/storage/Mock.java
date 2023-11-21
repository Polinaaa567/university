package local.arch.infrastructure.out.storage;


import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

import local.arch.application.IStorage;


public class Mock implements IStorage {	

	private double[] numbers = {0, 0};
	private String login = "qwerty";
	private String password = "12345678";

    @Override
	public void storeNumbers(double[] numbers) {
        this.numbers = numbers;
	}
	
	@Override
	public boolean findUser(String login, String password) {
		
        String userInfo = login + " " + password;
        boolean found = false;

        
            String st = this.login + " " + this.password;
            
                if (st.equals(userInfo)) {
                    found = true;
                }
            
        return found;
	}
	@Override
	public double[] reStoreNumbers() {
		System.out.println(this.numbers);
        return this.numbers;
	}
}