class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :approve, :comment, :name, :camp
end
