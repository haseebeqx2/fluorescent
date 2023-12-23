module Utils
  def self.snake_to_camel(hash)
    hash.map do |key, value|
      key_string = key.to_s
      camel_key = key_string.gsub(/_([a-z])/) { $1.upcase }
      [camel_key, value]
    end.to_h
  end
end
