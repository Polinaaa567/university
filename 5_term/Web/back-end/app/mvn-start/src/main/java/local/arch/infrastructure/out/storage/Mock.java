package local.arch.infrastructure.out.storage;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import local.arch.application.IStorage;

public class Mock implements IStorage {

	@Override
	public void storeNumbers(double number_1, double number_2) {
		try {
			FileOutputStream fos = new FileOutputStream(
					"C:\\Users\\2003k\\Documents\\university\\5_term\\Web\\back-end\\app\\mvn-start\\src\\main\\java\\local\\arch\\infrastructure\\out\\storage\\numbers.txt");
			DataOutputStream dos = new DataOutputStream(fos);

			dos.writeUTF(Double.toString(number_1));
			dos.writeUTF(Double.toString(number_2));

			dos.close();
		} catch (IOException ex) {
			System.out.println(ex.getMessage());
		}
	}

	// @Override
    // public void storeNumbers(double number_1, double number_2) {
    //     String url = "jdbc:postgresql://localhost:5432/mydb";
    //     String user = "polinka_mandarinka";
    //     String password = "password0504P";

    //     try {
    //         Connection connection = DriverManager.getConnection(url, user, password);
    //         System.out.println("Connected to the database");

    //         String sql = "INSERT INTO numbers (number_1, number_2) VALUES (?, ?)";
    //         PreparedStatement statement = connection.prepareStatement(sql);
    //         statement.setDouble(1, number_1);
    //         statement.setDouble(2, number_2);

    //         // Выполните запрос на вставку
    //         int rowsInserted = statement.executeUpdate();
    //         if (rowsInserted > 0) {
    //             System.out.println("Numbers inserted successfully!");
    //         }

    //         statement.close();
    //         connection.close();
    //         System.out.println("Connection closed");
    //     } catch (SQLException e) {
    //         System.out.println("Connection failed");
    //         e.printStackTrace();
    //     }
    // }

	String login = null;
	String password = null;

	@Override
	public boolean findUser(String login, String password) {
		try (BufferedReader reader = new BufferedReader(new FileReader(
				"C:\\Users\\2003k\\Documents\\university\\5_term\\Web\\back-end\\app\\mvn-start\\src\\main\\java\\local\\arch\\infrastructure\\out\\storage\\users.txt"))) {
			this.login = reader.readLine();
			this.password = reader.readLine();
		} catch (IOException ex) {
			System.err.println(ex);
		}
		if (this.login != null && this.password != null) {
			String userInfo = login + " " + password;
			String storedInfo = this.login + " " + this.password;
			return userInfo.equals(storedInfo);
		} else {
			return false;
		}
	}
}