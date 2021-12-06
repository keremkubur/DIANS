package dians.domasna;

import dians.domasna.DataHolder.DataHolder;
import dians.domasna.model.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;


@SpringBootApplication
@ServletComponentScan

public class DiansLabTestApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(DiansLabTestApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        readBusStations();
        readCarRental();
        readFuelStation();
        readParkingSpace();
        readPublicTransport();
    }

    public void readBusStations() throws IOException {
        String file = "Datoteki/bus_station.csv";
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line = "";
            while ((line = br.readLine()) != null) {
                String[] a = line.split(",");
                if (a[0].startsWith("@")) continue;
                BusStation n = new BusStation(Long.parseLong(a[0]), Double.parseDouble(a[1]), Double.parseDouble(a[2]));
                if (a.length == 4) n.setName(a[3]);
                DataHolder.busStations.add(n);
            }
        } catch (FileNotFoundException ignored) {
        }
    }

    public void readCarRental() throws IOException {
        String file = "Datoteki/car_rental.csv";
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line = "";
            while ((line = br.readLine()) != null) {
                String[] a = line.split(",");
                if (a[0].startsWith("@")) continue;
                CarRental n = new CarRental(Long.parseLong(a[0]), Double.parseDouble(a[1]), Double.parseDouble(a[2]));
                if (a.length == 4) n.setName(a[3]);
                DataHolder.carRentals.add(n);
            }
        } catch (FileNotFoundException ignored) {
        }
    }

    public void readFuelStation() throws IOException {
        String file = "Datoteki/fuel.csv";
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line = "";
            while ((line = br.readLine()) != null) {
                String[] a = line.split(",");
                if (a[0].startsWith("@")) continue;
                FuelStation n = new FuelStation(Long.parseLong(a[0]), Double.parseDouble(a[1]), Double.parseDouble(a[2]));
                if (a.length == 4) n.setName(a[3]);
                DataHolder.fuelStations.add(n);
            }
        } catch (FileNotFoundException ignored) {
        }
    }

    public void readParkingSpace() throws IOException {
        String file = "Datoteki/parking_space.csv";
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line = "";
            while ((line = br.readLine()) != null) {
                String[] a = line.split(",");
                if (a[0].startsWith("@")) continue;
                ParkingSpace n = new ParkingSpace(Long.parseLong(a[0]), Double.parseDouble(a[1]), Double.parseDouble(a[2]));
                if (a.length == 4) n.setName(a[3]);
                DataHolder.parkingSpaces.add(n);
            }
        } catch (FileNotFoundException ignored) {
        }
    }

    public void readPublicTransport() throws IOException {
        String file = "Datoteki/public_transport.csv";
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line = "";
            while ((line = br.readLine()) != null) {
                String[] a = line.split(",");
                if (a[0].startsWith("@")) continue;
                PublicTransport n = new PublicTransport(Long.parseLong(a[0]), Double.parseDouble(a[1]), Double.parseDouble(a[2]));
                if (a.length == 4) n.setName(a[3]);
                DataHolder.publicTransports.add(n);
            }
        } catch (FileNotFoundException ignored) {
        }
    }
}
