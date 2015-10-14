require 'json'

courses = []
200.times do
courses << {
    id: 100,
    title: "x"*25,
    subtitle: "x"*60,
    blurb: "x"*120,
    prereqs: "x"*100,
    learning_objectives: "x"*120,
    person_types: "x"*120,
    study_length: 3,
    career_ids: [1,2,3,4]
  }
end
courses_10 = courses.slice(0, 10)
courses_20 = courses.slice(0, 20)
courses_40 = courses.slice(0, 40)

careers = []
500.times do
careers << {
    id: 100,
    title: "x"*25,
    subtitle: "x"*60,
    blurb: "x"*120,
    highlights: "x"*120,
    challenges: "x"*120,
    third_thing: "x"*120,
    sal_min: 40000,
    sal_med_min: 50000,
    sal_med_max: 70000,
    sal_max: 140000,
    course_ids: [1,2,3,4]
  }
end
careers_10 = careers.slice(0, 10)
careers_20 = careers.slice(0, 20)
careers_40 = careers.slice(0, 40)

c = File.new("courses_200.json", "w")
c.write(JSON.generate(courses))
c.close

c = File.new("courses_10.json", "w")
c.write(JSON.generate(courses_10))
c.close

c = File.new("courses_20.json", "w")
c.write(JSON.generate(courses_20))
c.close

c = File.new("courses_40.json", "w")
c.write(JSON.generate(courses_40))
c.close

c = File.new("careers_500.json", "w")
c.write(JSON.generate(careers))
c.close

c = File.new("careers_10.json", "w")
c.write(JSON.generate(careers_10))
c.close

c = File.new("careers_20.json", "w")
c.write(JSON.generate(careers_20))
c.close

c = File.new("careers_40.json", "w")
c.write(JSON.generate(careers_40))
c.close

puts "Writing complete"
