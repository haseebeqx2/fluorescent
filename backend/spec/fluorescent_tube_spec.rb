require 'spec_helper'
require_relative '../fluorescent_tube'

describe FluorescentTube do
  let(:lifespan) { 150 }
  subject { FluorescentTube.new(lifespan) }

  describe '#decrement' do
    it 'decreases the lifespan by the specified hours' do
      hours = 10
      expect { subject.decrement(hours) }.to change { subject.lifespan }.by(-hours)
    end
  end

  describe '#failed?' do
    context 'when lifespan is positive' do
      it 'returns false' do
        expect(subject.failed?).to be false
      end
    end

    context 'when lifespan is zero or negative' do
      it 'returns true' do
        subject.decrement(lifespan + 10)
        expect(subject.failed?).to be true
      end
    end
  end
end
