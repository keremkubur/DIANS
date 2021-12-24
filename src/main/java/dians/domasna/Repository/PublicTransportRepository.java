package dians.domasna.Repository;

import dians.domasna.model.PublicTransport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicTransportRepository extends JpaRepository<PublicTransport, Long> {
}
