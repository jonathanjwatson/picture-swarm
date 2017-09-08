class Picture < ApplicationRecord
    def self.search(search)
        where("title LIKE ?", "%#{search}%") 
        OR
        where("description LIKE ?", "%" + "#{search}" + "%")
      end
end
