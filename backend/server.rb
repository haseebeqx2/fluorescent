require 'sinatra'
require 'json'
require 'sinatra/cors'

require_relative 'simulation'
require_relative 'utils'

set :allow_origin, "http://localhost:3000"
set :allow_methods, "GET,HEAD,POST"
set :allow_headers, "content-type,if-modified-since"
set :expose_headers, "location,link"

post '/simulate' do
  content_type :json
  result = Simulation.new.run
  Utils.snake_to_camel(result).to_json
end

get '/purchase-new-unit' do
  content_type :json
  Array.new(4) { {lifespan: Random.rand(100..200)} }.to_json
end
