# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Picture.destroy_all
User.destroy_all

admin = User.new
admin.email = 'jonathanwatson1@gmail.com'
admin.password = 'password'
admin.password_confirmation = 'password'
admin.save

sunset = Picture.create({title: "Sunset", user_id: admin.id, url: "https://static.pexels.com/photos/66997/pexels-photo-66997.jpeg",description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."})
cabin  = Picture.create({title: "Cabin", user_id: admin.id, url: "https://static1.squarespace.com/static/54bff0d3e4b03c2b708fee78/54dce804e4b0208bec0e6939/5554fca4e4b01c8cda5a5d55/1499833385964/log+cabin+exterior.jpg", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."})
leavecs = Picture.create({title: "Fall Leaves", user_id: admin.id, url: "https://thefisheriesblog.files.wordpress.com/2013/09/28f16-free_fall_leaves_shutterstock_61538884_web.jpg", description: "Fall leaves are the best. Sunset. As they gently fall to the ground, magical things awaken."})