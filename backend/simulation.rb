require_relative 'fluorescent_tube'

class Simulation
  COST_PER_TUBE = 7
  HOURS_PER_DAY = 15
  DAYS_PER_WEEK = 5
  MONTHS_PER_YEAR = 9

  def initialize
    @total_hours_per_year = HOURS_PER_DAY * DAYS_PER_WEEK * (4 * MONTHS_PER_YEAR)
    @total_broken_tubes = 0
  end

  def run
    4.times { simulate_unit }
    {
      broken_tubes: @total_broken_tubes,
      total_cost: @total_broken_tubes * COST_PER_TUBE
    }
  end

  private

  def simulate_unit
    tubes = Array.new(4) { FluorescentTube.rand }
    hours_remaining = @total_hours_per_year

    while hours_remaining > 0
      tubes.each { |tube| tube.decrement(HOURS_PER_DAY) }
      if tubes.count(&:failed?) >= 2
        @total_broken_tubes += tubes.count(&:failed?)
        tubes = Array.new(4) { FluorescentTube.rand }
      end
      hours_remaining -= HOURS_PER_DAY
    end
  end
end
