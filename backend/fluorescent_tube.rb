class FluorescentTube
  attr_reader :lifespan

  def self.rand
    new(Random.rand(100..200))
  end

  def initialize(lifespan)
    @lifespan = lifespan
  end

  def decrement(hours)
    @lifespan -= hours
  end

  def failed?
    @lifespan <= 0
  end
end
