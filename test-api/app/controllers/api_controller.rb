class ApiController < ApplicationController
  def test
    data = {
      courses: [],
      careers: []
    }

    300.times do
      data[:courses] << {
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

    700.times do
      data[:careers] << {
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

    render json: data
  end
end
