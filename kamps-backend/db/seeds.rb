# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Camp.destroy_all
Review.destroy_all

# Camp objects 
camp1 = Camp.create({name: "43rd Street Kids Summer Camp", description: "Activities include swim lessons, art, music, story-telling, gardening, cooking, games, sand and water play, science experiments, creative dance, and more.", street_address: "484 West 43rd Street",website: "https://43rdstreetkidspreschool.org/summer-program-overview-top/", borough: "Manhattan", zip: 10036 , phone:"212-564-7496", img_src:"assets/images/43-logo.png"})
camp2 = Camp.create({name: "Advantage Day Camp at Manhattan Plaza Racquet Club", description: "At Advantage Day Camp, the activity never stops as kids ages 4 to 14 go swimming; play tennis, gym, and field sports; and more. ", street_address:"450 West 43rd Street", website: "https://advantagecamps.net/", borough: "Manhattan", zip: 10036 , phone:"646-884-9648", img_src:"assets/images/advantage-logo.png"})
camp3 = Camp.create({name: "Campus Day Camp", description: "Campus Day Camp's facility is conveniently located at Brooklyn College. The philosophy is to create a safe, fun, and enriching environment in which all children can develop and thrive.", street_address:"2901 Campus Road", website: "https://campusdaycamp.com/", borough: "Brooklyn", zip: 11210 , phone:"718-421-7575", img_src:"assets/images/campusday-logo.jpg"})
camp4 = Camp.create({name: "Cary Leeds Center for Tennis & Learning", description: "The Cary Leeds Center is the flagship home of New York Junior Tennis & Learning. NYJTL's mission is to develop the character of young people through tennis and education for a lifetime of success on and off the court.", street_address:"1720 Crotona Avenue", website: "https://www.nyjtl.org/caryleeds/programs/camps/", borough: "Bronx", zip: 10457 , phone:"718-247-7420", img_src:"assets/images/leeds-logo.jpg"})
camp5 = Camp.create({name: "Mill Basin Day Camp", description: "All activities take place in Mill Basin Day Camp's fully air-conditioned modern facility, which includes one of the largest outdoor pools in Brooklyn—complete with 4 slides.", street_address:"5945 Strickland Ave", website: "https://millbasindaycamp.com", borough: "Brooklyn", zip: 11234 , phone:"718-251-6200", img_src:"assets/images/mill-basin-logo.png"})
camp6 = Camp.create({name: "Mosholu Day Camp", description: "Sitting on beautiful Lake Cohasset at Harriman State Park, Mosholu Day Camp offers children a place to develop, experience, and enjoy nature while taking part in unforgettable summer activities like swimming, boating, sports, music, arts, and everything else you’d expect from an awesome summer day camp.", street_address:"3450 Dekalb Ave", website: "https://www.mmcc.org/camp/", borough: "Bronx", zip: 10467 , phone:"718-882-4000", img_src:"assets/images/mmcc-logo.png"})
camp7 = Camp.create({name: "Summer Camp at Lehman College", description: "Academic activities include English language arts (ELA) and math lessons from certified teachers. Recreational activities include learn-to-swim classes in an Olympic-size pool as well as basketball, martial arts, dance, and much, much more.", street_address: "250 Bedford Park Blvd.", website: "http://www.lehman.edu/academics/continuing-education/summer-camp.php", borough: "Bronx", zip: 10468 , phone:"718-960-8512", img_src:"assets/images/lehman-logo.jpg"})
camp8 = Camp.create({name: "Manhattan Fencing Center", description: "Located in NYC’s Olympic fencing facility, camp is ideal for beginner and intermediate fencers. Fencing groups are separated by age and experience. Activities include fencing games, footwork, drills, and open bouting.", street_address: "15W 37th Street ", website: "https://manhattanfencing.com", borough: "Manhattan", zip: 10018 , phone:"212-328-2255", img_src:"assets/images/fencing-logo.png"})
camp9 = Camp.create({name: "School of Rock - Queens", description: "Send your kid to the ultimate summer music experience at School of Rock Queens. Summer music camps are the perfect way to spend your summer break, where students learn to play songs through live performances like real musicians.", street_address: "34-43 Francis Lewis Blvd", website: "https://locations.schoolofrock.com/queens/music-camps", borough: "Queens", zip: 11358 , phone:"929-999-7625", img_src:"assets/images/rockschool-logo.png"})
camp10 = Camp.create({name: "Lavner Camps NYC", description: "Summer camps include Minecraft, Coding, Robotics, Alexa Skills, 3-D Printing, Game Design, Roblox, AI, Spy Tech, Engineering, Custom Converse/Vans Sneakers, Digital Music, YouTube Video Production, and so much more.", street_address: "60 Washington Square South", website: "https://lavnercampsandprograms.com", borough: "Manhattan", zip: 10012 , phone:"646-308-1555", img_src:"assets/images/lavner-logo.png"})

# Review objects
camp1.reviews.create([{comment: "Loved It!", approve:"True" , name: "Tracy"},{comment: "Did not work for my kids.", approve:"False" , name: "Sarah"}]) 
camp2.reviews.create([{comment: "My kids had a great time here!", approve:"True" , name: "Tiffany"}, {comment: "Tutoring was offered and my kid still failed", approve:"False" , name: "Samantha"}])
camp3.reviews.create([{comment: "Great staff!", approve:"True", name: "Anika"}, {comment: "The kids here are out of control. There is no supervision.", approve:"False" , name: "Mary"}])
camp4.reviews.create([{comment: "Warm nuturing program. My kids loved attending here.", approve:"True" , name: "Peter"}, {comment: "Not enough activities to keep kids entertained.", approve:"False" , name: "Chris"}])
camp5.reviews.create([{comment: "The trips and activities planned helped extend the learning for my child!", approve:"True" , name: "Judy"}, {comment: "Too many students and not enough staff. Everyone seems over worked.", approve:"False" , name: "Richard"}])
camp6.reviews.create([{comment: "Small groups helps students build a great relationships with their camp leader. My kids loved Ms. Sarah!", approve:"True" , name: "Veronica"}, {comment: "Hated It and I would not recommend.", approve:"False" , name: "Ryan"}])
camp7.reviews.create([{comment: "Great camp facilty with lots to do!", approve:"True" , name: "Jason"}, {comment: "Stay far away.", approve:"False" , name: "Kelly"}])
camp8.reviews.create([{comment: "A city camp with a suburban feel.", approve:"True" , name: "Lucy"}, {comment: "Bullying is an issue that the staff is aware of but does not address.", approve:"False" , name: "Amanda"}])
camp9.reviews.create([{comment: "My child learned so much.", approve:"True" , name: "Natalie"}, {comment: "Too expensive for the little that was offered.", approve:"False" , name: "Dorian"}])
