class Camp < ApplicationRecord
    has_many :reviews 
    validates :img_src, presence: true
    validates :name, presence: true
    validates :description, presence: true
    validates :website, presence: true
    validates :borough, presence: true
    validates :zip, presence: true
    validates :phone, presence: true
    validates :street_address, presence: true
    
end
