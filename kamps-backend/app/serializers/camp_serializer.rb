class CampSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :borough, :website, :img_src, :zip, :phone, :description, :street_address, :reviews
end
