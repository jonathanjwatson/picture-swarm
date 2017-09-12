class Tag < ApplicationRecord
    has_many :pictures, through: :picture_tags
    has_one :picture_tags
end
