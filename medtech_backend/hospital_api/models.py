from djongo import models

class Hospital(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    bed_availability = models.IntegerField(default=0)
    no_of_doctors = models.IntegerField(default=0)
    no_of_nurses = models.IntegerField(default=0)
    no_of_icu_beds = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
