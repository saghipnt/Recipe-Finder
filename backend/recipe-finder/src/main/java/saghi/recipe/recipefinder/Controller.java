package saghi.recipe.recipefinder;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hello")

public class Controller {
    @GetMapping
    String getHello() {
        return "Hello World";
    }


}
