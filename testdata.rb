require 'json'

course = {
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
course_list = {
  id: 100,
  title: "x"*25,
  subtitle: "x"*60,
  blurb: "x"*120,
}
courses = []
courses_list = []
200.times do
  courses << course
end
40.times do
  courses_list << course_list
end

career = {
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
career_list = {
  id: 100,
  title: "x"*25,
  subtitle: "x"*60,
  blurb: "x"*120,
}
careers = []
careers_list = []
500.times do
  careers << career
end
40.times do
  careers_list << career_list
end
careers_list_40 = careers_list.slice(0, 40)

c = File.new("courses_200.json", "w")
c.write(JSON.generate(courses))
c.close

c = File.new("courses_list_40.json", "w")
c.write(JSON.generate(courses_list))
c.close

c = File.new("careers_500.json", "w")
c.write(JSON.generate(careers))
c.close

c = File.new("careers_list_40.json", "w")
c.write(JSON.generate(careers_list))
c.close

puts "Writing complete"
