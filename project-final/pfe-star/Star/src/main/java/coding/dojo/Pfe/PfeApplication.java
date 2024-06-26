package coding.dojo.Pfe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class PfeApplication {

	public static void main(String[] args) {
		SpringApplication.run(PfeApplication.class, args);
	}

}
