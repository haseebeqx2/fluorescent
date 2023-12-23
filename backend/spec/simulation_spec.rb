require 'spec_helper'
require_relative '../simulation'

describe Simulation do
  subject { Simulation.new }

  describe '#run' do
    it 'returns a hash with broken tubes and total cost' do
      result = subject.run
      expect(result).to be_a(Hash)
      expect(result).to include(:broken_tubes, :total_cost)
      expect(result[:broken_tubes]).to be_a(Integer)
      expect(result[:total_cost]).to eq(result[:broken_tubes] * Simulation::COST_PER_TUBE)
    end
  end
end
