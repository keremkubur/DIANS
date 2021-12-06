package dians.domasna.model;

public class FuelStation {
    private Long Id;
    private Double Long;
    private Double Lat;
    private String name;

    public FuelStation(java.lang.Long id, Double aLong, Double lat) {
        Id = id;
        Long = aLong;
        Lat = lat;
    }

    public java.lang.Long getId() {
        return Id;
    }

    public void setId(java.lang.Long id) {
        Id = id;
    }

    public Double getLong() {
        return Long;
    }

    public void setLong(Double aLong) {
        Long = aLong;
    }

    public Double getLat() {
        return Lat;
    }

    public void setLat(Double lat) {
        Lat = lat;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
