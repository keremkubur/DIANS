package dians.domasna.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Data
@Entity
@Table(name = "parking_space")
@Getter
@Setter
public class ParkingSpace {
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column(name = "longitude", nullable = false)
    private Double Long;
    @Column(name = "latitude", nullable = false)
    private Double Lat;
    @Column(name = "name")
    private String name;

    public ParkingSpace(java.lang.Long id, Double aLong, Double lat) {
        Id = id;
        Long = aLong;
        Lat = lat;
    }

    public ParkingSpace() {

    }

}

