import csv
import re
import unicodedata

def slugify(value):
    value = str(value)
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value.lower()).strip()
    return re.sub(r'[-\s]+', '-', value)

with open('data/cities.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        city_name = row.get('city')
        slug = slugify(city_name)
        f = open("content/cities/{}.md".format(slug), "w")
        f.write("---\n")
        f.write("name: {}\n".format(slug))
        f.write("title: {}\n".format(city_name))
        f.write("datasets: {}\n".format(row.get("datensaetze")))
        f.write("musterdaten: {}\n".format(row.get("vorhanden")))
        f.write("potential: {}\n".format(row.get("potential")))
        f.write("---\n")
        f.write("# {}\n".format(city_name))
        f.close()
