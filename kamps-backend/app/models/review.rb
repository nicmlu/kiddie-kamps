class Review < ApplicationRecord
    belongs_to :menu
    validates :approve, presence: true
    validates :comment, presence: true
    validates :name, presence: true
end
