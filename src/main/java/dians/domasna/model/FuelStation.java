package dians.domasna.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Data
@Entity
@Table(name = "fuel_station")
@Getter
@Setter
public class FuelStation {
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column(name = "longitude", nullable = false)
    private Double Long;
    @Column(name = "latitude", nullable = false)
    private Double Lat;
    @Column(name = "name")
    private String name;

    public FuelStation(java.lang.Long id, Double aLong, Double lat) {
        Id = id;
        Long = aLong;
        Lat = lat;
    }

    public FuelStation() {

    }
}
