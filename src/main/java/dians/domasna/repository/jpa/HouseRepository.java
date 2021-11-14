package dians.domasna.repository.jpa;

import dians.domasna.model.House;
import dians.domasna.model.Street;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HouseRepository extends JpaRepository<House, Long> {
    List<House> findHousesByStreet(String streetName);

    Optional<House> getHouseById(Long id);

    Optional<House> getHouseByName(String name);

}
