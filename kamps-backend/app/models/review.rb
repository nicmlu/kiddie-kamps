class Review < ApplicationRecord
    belongs_to :menu, optional: true
    validates :approve, presence: true
    validates :comment, presence: true
    validates :name, presence: true

end