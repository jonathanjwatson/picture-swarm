class Picture < ApplicationRecord
    def self.search(search)
        title_search = where("title LIKE ?", "%#{search}%") 
        desc_search = where("description LIKE ?", "%" + "#{search}" + "%")
        title_search.or(desc_search)
      end
end
