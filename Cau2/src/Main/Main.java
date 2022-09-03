package Main;
import java.util.ArrayList;
import java.util.Scanner;
public class Main {
	
	public static void main(String[] args) {

		//Nhap du lieu
		Scanner input = new Scanner(System.in);
	    System.out.print("Moi nhap gia tri n: ");
	    int n = Integer.parseInt(input.nextLine());
	    ArrayList<Team> list = new ArrayList<Team>();
	    for(int i=0; i<n; i++) {
	    	System.out.print("Moi nhap name: ");
	    	String name = input.nextLine();
	    	System.out.print("Moi nhap gia tri win_rate: ");
	    	int winRate = Integer.parseInt(input.nextLine());
	    	Team temp = new Team(name,winRate);
	    	list.add(temp);
	    }
	    input.close();

	    //2 Array chua 2 nhom a va b
	    ArrayList<Team> a = new ArrayList<Team>();
	    ArrayList<Team> b = new ArrayList<Team>();
	    boolean forA = true;
	    
	    for(int i=0; i<n; i++) {
	    	Team temp = new Team("",0);
	    	int count = 0;
	    	int index = 0;
	    	
	    	//Tim kiem team co gia tri Win_rate lon nhat
	    	for(Team c : list) {
	    		if(c.getWin_rate() > temp.getWin_rate()) {
	    			index = count;
	    			temp = c;
	    		}
	    		count++;
	    	}
	    	
	    	//Xoa phan tu co gia tri Win_rate lon nhat trong list
	    	list.remove(index);
	    	
	    	//Truyen gia tri vua tim` vao cac mang tuong ung
	    	if(forA) {
	    		a.add(temp);
	    		forA = false;
	    	}
	    	else {
	    		b.add(temp);
	    		forA = true;
	    	}
	    }
	    
	    //Xuat nhom a
	    System.out.println("Nhom A");
	    for(Team c : a)
	    	System.out.println("Name: "+ c.getName() + " Win_rate: " + c.getWin_rate());
	    
	    //Xuat nhom b
	    System.out.println("Nhom B");
	    for(Team c : b) 
	    	System.out.println("Name: "+ c.getName() + " Win_rate: " + c.getWin_rate());
	}

}
