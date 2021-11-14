package dians.domasna.model;

import dians.domasna.filter.HouseFilter;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "planet_osm_roads")
public class House {
    @Id
    @Column(name = "osm_id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "addr:housename")
    private String address;

    @Column(name = "way")
    private String osm_way;

    public House() {

    }

    public House(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
