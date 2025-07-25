import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Categories = ({ selectedCategory, setSelectedCategory, hideText = false }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState('DJ')
  const [showAllVendors, setShowAllVendors] = useState(false)
  const navigate = useNavigate();

  const categories = [
    {
      id: 'entertainment',
      name: 'Entertainment & Attractions',
      icon: '/assets/entertain.svg',
      subcategories: ['DJ', 'Live Band', 'Photo Booth']
    },
    {
      id: 'food',
      name: 'Food & Drinks',
      icon: '/assets/food.svg',
      subcategories: ['Catering', 'Food Trucks', 'Bartenders']
    },
    {
      id: 'decoration',
      name: 'Decoration & Styling',
      icon: '/assets/decoration.svg',
      subcategories: ['Floral Design', 'Event Styling', 'Decorations']
    },
    {
      id: 'locations',
      name: 'Locations & Party Tents',
      icon: '/assets/partytent.svg',
      subcategories: ['Venues', 'Party Tents', 'Outdoor Spaces']
    },
    {
      id: 'staff',
      name: 'Staff & Services',
      icon: '/assets/staff.svg',
      subcategories: ['Event Staff', 'Security', 'Coordination']
    }
  ]

  const subcategoryIcons = {
    'DJ': '/assets/subcategory1.svg',
    'Live Band': '/assets/subcategory2.svg',
    'Photo Booth': '/assets/subcategory3.svg',
    'Catering': '/assets/food.svg',
    'Food Trucks': '/assets/food.svg',
    'Bartenders': '/assets/food.svg',
    'Floral Design': '/assets/Table.svg',
    'Event Styling': '/assets/LED.svg',
    'Decorations': '/assets/Chandelier.svg',
    'Venues': '/assets/partytent.svg',
    'Party Tents': '/assets/partytent.svg',
    'Outdoor Spaces': '/assets/partytent.svg',
    'Event Staff': '/assets/staff.svg',
    'Security': '/assets/staff.svg',
    'Coordination': '/assets/staff.svg',
    // Add more as needed
  };
  const getSubcategoryIcon = (subcategory) => {
    return subcategoryIcons[subcategory] || '/assets/subcategory1.svg'; // fallback to a default icon
  };

  const getCurrentSubcategories = () => {
    const category = categories.find(cat => cat.name === selectedCategory)
    return category ? category.subcategories : []
  }

  // Sample vendor data based on the image
  const vendors = [
    {
      id: 1,
      name: 'DJ Ray Vibes',
      category: 'Entertainment & Attractions',
      subcategory: 'DJ',
      rating: 4.9,
      reviews: 5,
      price: 300,
      image: '/assets/vendor1.jpg',
      description: 'Known for electrifying energy and seamless transitions. DJ Ray brings...',
      location: 'Los Angeles, CA',
      experience: '5+ years',
      availability: 'Available'
    },
    {
      id: 2,
      name: 'DJ Ray Vibes',
      category: 'Entertainment & Attractions',
      subcategory: 'DJ',
      rating: 4.9,
      reviews: 5,
      price: 300,
      image: '/assets/vendor2.jpg',
      description: 'Known for electrifying energy and seamless transitions. DJ Ray brings...',
      location: 'Los Angeles, CA',
      experience: '5+ years',
      availability: 'Available'
    },
    {
      id: 3,
      name: 'DJ Ray Vibes',
      category: 'Entertainment & Attractions',
      subcategory: 'DJ',
      rating: 4.9,
      reviews: 5,
      price: 300,
      image: '/assets/vendor3.jpg',
      description: 'Known for electrifying energy and seamless transitions. DJ Ray brings...',
      location: 'Los Angeles, CA',
      experience: '5+ years',
      availability: 'Available'
    },
    {
      id: 4,
      name: 'DJ Ray Vibes',
      category: 'Entertainment & Attractions',
      subcategory: 'DJ',
      rating: 4.9,
      reviews: 5,
      price: 300,
      image: '/assets/vendor4.jpg',
      description: 'Known for electrifying energy and seamless transitions. DJ Ray brings...',
      location: 'Los Angeles, CA',
      experience: '5+ years',
      availability: 'Available'
    },
    // Food category vendors
    {
      id: 5,
      name: 'Gourmet Food Truck',
      category: 'Food & Drinks',
      subcategory: 'Food Trucks',
      rating: 4.8,
      reviews: 15,
      price: 500,
      image: '/assets/vendor5.jpg',
      description: 'Artisanal food truck serving gourmet street food for all events...',
      location: 'Los Angeles, CA',
      experience: '4+ years',
      availability: 'Available'
    },
    {
      id: 6,
      name: 'Elite Catering Services',
      category: 'Food & Drinks',
      subcategory: 'Catering',
      rating: 4.9,
      reviews: 25,
      price: 750,
      image: '/assets/vendor6.jpg',
      description: 'Professional catering service for weddings, corporate events, and more...',
      location: 'San Francisco, CA',
      experience: '8+ years',
      availability: 'Available'
    },
    {
      id: 7,
      name: 'Master Bartender',
      category: 'Food & Drinks',
      subcategory: 'Bartenders',
      rating: 4.7,
      reviews: 18,
      price: 300,
      image: '/assets/vendor7.jpg',
      description: 'Expert bartender with extensive cocktail knowledge and flair...',
      location: 'Las Vegas, NV',
      experience: '6+ years',
      availability: 'Available'
    },
    {
      id: 8,
      name: 'Premium Food Truck',
      category: 'Food & Drinks',
      subcategory: 'Food Trucks',
      rating: 4.6,
      reviews: 12,
      price: 450,
      image: '/assets/vendor8.jpg',
      description: 'Specializing in fusion cuisine with a mobile kitchen setup...',
      location: 'Austin, TX',
      experience: '5+ years',
      availability: 'Available'
    }
  ]

  const filteredVendors = vendors.filter(vendor => 
    vendor.category === selectedCategory && vendor.subcategory === selectedSubcategory
  )

  // Determine how many vendors to show on mobile (below md: 448px)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 448;
  let vendorsToShow = filteredVendors;
  if (!showAllVendors && filteredVendors.length > 3) {
    vendorsToShow = isMobile ? filteredVendors.slice(0, 3) : filteredVendors;
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        {!hideText && (
          <div className="text-center mb-responsive">
            <h2 className="text-responsive-h2 text-gray-900">
              Explore <span className="bg-gradient-to-b from-secondary via-primary-500 to-primary-600 bg-clip-text text-transparent">Categories</span>
            </h2>
          </div>
        )}

        {/* Category Icons */}
        {!hideText && (
        <div
          className="grid grid-cols-3 gap-y-6 gap-x-2 justify-items-center mb-responsive md:flex md:justify-center md:items-start md:gap-y-0 md:gap-x-0 md:space-x-8 md:overflow-visible md:pb-0"
        >
          {/* First row: first 3 categories */}
          {categories.slice(0, 3).map((category) => (
            <div
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.name)
                setSelectedSubcategory(category.subcategories[0])
              }}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 min-w-max ${
                selectedCategory === category.name ? 'transform scale-105' : 'hover:scale-102'
              }`}
            >
              <div
                className={`category-card-mobile sm:category-card-desktop border-4 transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-b from-secondary via-primary-500 to-primary-600 border-white shadow-category'
                    : 'bg-white border-gray-200 hover:border-primary-300 shadow-card'
                }`}
              >
                <img 
              src={category.icon}
                  alt={category.name}
                  className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 ${
                    selectedCategory === category.name ? 'filter brightness-0 invert' : ''
                  }`}
                />
              </div>
              <span
                className={`text-xs sm:text-sm font-medium text-center max-w-20 sm:max-w-28 leading-tight transition-all duration-300 ${
                  selectedCategory === category.name ? 'text-primary-500 font-semibold' : 'text-gray-700'
                }`}
              >
                {category.name}
              </span>
            </div>
          ))}
          {/* Second row: last 2 categories, centered on mobile */}
          <div className="col-span-3 flex justify-center gap-x-4 md:col-span-1 md:flex-none md:justify-start md:gap-x-8">
            {categories.slice(3).map((category) => (
              <div
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.name)
                  setSelectedSubcategory(category.subcategories[0])
                }}
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 min-w-max ${
                  selectedCategory === category.name ? 'transform scale-105' : 'hover:scale-102'
                }`}
              >
                <div
                  className={`category-card-mobile sm:category-card-desktop border-4 transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-b from-secondary via-primary-500 to-primary-600 border-white shadow-category'
                      : 'bg-white border-gray-200 hover:border-primary-300 shadow-card'
                  }`}
                >
                  <img 
                src={category.icon}
                    alt={category.name}
                    className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 ${
                      selectedCategory === category.name ? 'filter brightness-0 invert' : ''
                    }`}
                  />
                </div>
                <span
                  className={`text-xs sm:text-sm font-medium text-center max-w-20 sm:max-w-28 leading-tight transition-all duration-300 ${
                    selectedCategory === category.name ? 'text-primary-500 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Subcategory Pills */}
        {!hideText && (
          <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-responsive flex-wrap gap-2">
            {getCurrentSubcategories().map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => setSelectedSubcategory(subcategory)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedSubcategory === subcategory
                    ? 'bg-gradient-to-b from-secondary via-primary-500 to-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-500'
                }`}
              >
                <img
                  src={getSubcategoryIcon(subcategory)}
                  alt={subcategory}
                  className="w-8 h-8 bg-white rounded-lg"
                />
                <span>{subcategory}</span>
              </button>
            ))}
            <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-full text-primary-500 hover:bg-primary-50 text-sm font-medium transition-colors">
              See All
            </button>
          </div>
        )}

        {/* Vendor Section Title */}
        {!hideText && (
          <div className="text-center mb-responsive">
            <h3 className="text-responsive-h2 text-gray-900 mb-2">
              All {selectedSubcategory} <span className="text-gray-400">({filteredVendors.length})</span>
            </h3>
            <p className="text-responsive-body text-gray-600">
              Start to book DJ for your <span className="font-semibold text-primary-500">Event</span> Because everything is on place
            </p>
          </div>
        )}

        {/* Vendor Cards for Selected Category and Selected Subcategory Only */}
        {categories.filter(category => category.name === selectedCategory).map(category => {
          const subVendors = vendors.filter(
            v => v.category === category.name && v.subcategory === selectedSubcategory
          );
          return (
            <div key={category.id} className="mb-10">
              {/* Remove category and subcategory headings here */}
              <div className="mb-6">
                {subVendors.length === 0 ? (
                  <div className="text-center text-gray-500 py-8 text-lg">
                    Not Available😌
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {subVendors.map(vendor => (
                      <div key={vendor.id} className="card-mobile vendor-card-desktop">
                        {/* Vendor Image */}
                        <div className="relative image-container-mobile sm:image-container-desktop bg-gradient-to-br from-gray-200 to-gray-300">
                          <img
                            src={`/assets/categorycard.svg`}
                            alt={vendor.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 hidden items-center justify-center">
                            <span className="text-gray-500 text-sm">DJ Image</span>
                          </div>
                        </div>

                        {/* Vendor Details */}
                        <div className="space-mobile-sm sm:p-5">
                          {/* Vendor Avatar and Name */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <img 
                                src="/assets/Profile.svg" 
                                alt="Jaydeep" 
                                className="w-8 h-8 rounded-full mr-3"
                              />
                              <span className="text-black-600 text-sm font-medium">Jaydeep</span>
                            </div>
                            <span className="text-green-600 text-sm font-medium bg-green-100 rounded-lg px-2">• Available</span>
                          </div>
                          
                          <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">{vendor.name}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-4">{vendor.description}</p>
                          
                          {/* Vendor Info */}
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="font-medium">Location:</span>
                              <span className="ml-2">{vendor.location}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="font-medium">Experience:</span>
                              <span className="ml-2">{vendor.experience}</span>
                            </div>
                          </div>

                          {/* Rating and Price */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <span className="text-yellow-400 text-lg">⭐</span>
                              <span className="ml-1 font-semibold text-gray-900">{vendor.rating}/5</span>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gray-900">${vendor.price}</div>
                              <div className="text-xs text-gray-500">Per Event</div>
                            </div>
                          </div>

                          {/* Book Now Button */}
                          <button
                            className="btn-primary-mobile w-full touch-button"
                            onClick={() => navigate('/bookingpage')}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        
        {/* View All Button */}
        <div className="text-center hidden md:block">
          <button className="px-8 py-3 border-2 border-primary-500 text-primary-500 rounded-full font-medium hover:bg-primary-50 transition-colors duration-300">
            View All →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Categories
