class CampSerializer
  include FastJsonapi::ObjectSerializer
  attributes :img_src, :name, :description, :website, :borough, :zip, :phone, :street_address, :reviews
end
