require 'spec_helper'

describe "My Sinatra Application" do
  describe 'POST /simulate' do
    it 'returns a JSON response' do
      post '/simulate'
      expect(last_response).to be_ok
      expect(last_response.content_type).to eq('application/json')
    end

    it 'returns a properly structured JSON with broken tubes and total cost' do
      post '/simulate'
      json_response = JSON.parse(last_response.body)
      expect(json_response).to be_a(Hash)
      expect(json_response).to include('brokenTubes', 'totalCost')
      expect(json_response['brokenTubes']).to be_a(Integer)
      expect(json_response['totalCost']).to eq(json_response['brokenTubes'] * Simulation::COST_PER_TUBE)
    end
  end

  describe 'GET /purchase-new-unit' do
    it 'returns a JSON response' do
      get '/purchase-new-unit'
      expect(last_response).to be_ok
      expect(last_response.content_type).to eq('application/json')
    end

    it 'returns an array of units' do
      get '/purchase-new-unit'
      json_response = JSON.parse(last_response.body)
      expect(json_response).to be_a(Array)
      expect(json_response.length).to eq(4)
      expect(json_response.first).to have_key('lifespan')
    end
  end
end
