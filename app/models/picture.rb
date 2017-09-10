class Picture < ApplicationRecord
    def self.search(search)
        title_search = where("title ILIKE ?", "%#{search}%") 
        desc_search = where("description ILIKE ?", "%" + "#{search}" + "%")
        title_search.or(desc_search)
      end
end
