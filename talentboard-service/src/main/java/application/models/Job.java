package application.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Job {

    @Id
    private String id;
    private String title;
    private List<String> columns;
    private List<String> applicantIds;

    public Job() {}

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public List<String> getColumns() {
        return columns;
    }

    public List<String> getApplicantIds() {
        return applicantIds;
    }
}
