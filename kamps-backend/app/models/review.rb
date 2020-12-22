class Review < ApplicationRecord
    extend Forwardable
    belongs_to :camp, optional: true
    validates :approve, presence: true
    validates :comment, presence: true
    validates :name, presence: true

end