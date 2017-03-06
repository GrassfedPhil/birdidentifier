package awesome.phil;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;

@RestController
public class PhotoUploadService {

    @RequestMapping("/photo")
    public String uploadPhoto(@RequestBody File file) {
        return "fuckbeans";
    }
}
