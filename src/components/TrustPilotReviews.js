import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaStar, 
  FaStarHalfAlt, 
  FaRegStar, 
  FaThumbsUp, 
  FaThumbsDown,
  FaCheckCircle,
  FaExclamationTriangle,
  FaRegCommentDots,
  FaTimes,
  FaShare,
  FaBookmark,
  FaRegBookmark,
  FaAd,
  FaNewspaper
} from 'react-icons/fa';
import './TrustPilotReviews.css';

const TrustPilotReviews = () => {
  const affiliateLink = "https://chartlordai.com/?ref=mrxw4yhbhrco";
  
  // State for filters
  const [filterRating, setFilterRating] = useState(0);
  const [sortBy, setSortBy] = useState('recent');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleReviews, setVisibleReviews] = useState(4);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [savedArticles, setSavedArticles] = useState({});
  
  // State for user interactions
  const [likedReviews, setLikedReviews] = useState({});
  const [dislikedReviews, setDislikedReviews] = useState({});
  const [reviews, setReviews] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [commentName, setCommentName] = useState('');
  const [activeCommentBox, setActiveCommentBox] = useState(null);
  const [reviewComments, setReviewComments] = useState({});
  
  // State for review form
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    title: '',
    content: '',
    categories: []
  });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  // Available categories
  const availableCategories = [
    "Forex Trading", "Automated", "Beginner Friendly", "Support", 
    "Learning Curve", "Passive Income", "Professionals", "Risk Management",
    "Life Changing", "Parents", "Experienced Traders", "Single Parents",
    "Financial Freedom", "Customer Support", "Retirement", "Seniors",
    "Skeptics", "Beginners", "Education"
  ];

  // Load data from localStorage on initial render
  useEffect(() => {
    // Load saved reviews
    const savedReviews = localStorage.getItem('chartlord-sa-reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      // Load initial reviews if no saved reviews exist
      setReviews(initialReviews);
      localStorage.setItem('chartlord-sa-reviews', JSON.stringify(initialReviews));
    }
    
    // Load likes/dislikes
    const savedLikes = localStorage.getItem('chartlord-sa-likes');
    if (savedLikes) {
      setLikedReviews(JSON.parse(savedLikes));
    }
    
    const savedDislikes = localStorage.getItem('chartlord-sa-dislikes');
    if (savedDislikes) {
      setDislikedReviews(JSON.parse(savedDislikes));
    }
    
    const savedComments = localStorage.getItem('chartlord-sa-comments');
    if (savedComments) {
      setReviewComments(JSON.parse(savedComments));
    }
    
    // Load saved articles
    const savedArticlesData = localStorage.getItem('chartlord-sa-saved');
    if (savedArticlesData) {
      setSavedArticles(JSON.parse(savedArticlesData));
    }
  }, []);

  // Save to localStorage when interactions change
  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem('chartlord-sa-reviews', JSON.stringify(reviews));
    }
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('chartlord-sa-likes', JSON.stringify(likedReviews));
  }, [likedReviews]);

  useEffect(() => {
    localStorage.setItem('chartlord-sa-dislikes', JSON.stringify(dislikedReviews));
  }, [dislikedReviews]);

  useEffect(() => {
    localStorage.setItem('chartlord-sa-comments', JSON.stringify(reviewComments));
  }, [reviewComments]);

  useEffect(() => {
    localStorage.setItem('chartlord-sa-saved', JSON.stringify(savedArticles));
  }, [savedArticles]);

  // Reviews data - South African users with image URLs
  const initialReviews = [
    {
      id: 1,
      name: "Thabo Mbeki",
      location: "Johannesburg, Gauteng",
      date: "2 March 2026",
      rating: 5,
      title: "Best decision I made this year",
      content: "I was skeptical at first because there are so many scams out there. But after 3 months using ChartLord AI, my R5,000 investment has grown to R12,400. The automated trading works while I'm at my regular job. Absolutely life-changing. I've been able to pay off my car and save for my kids' education. The platform is intuitive and the support team is always available when I need help. I've recommended it to all my colleagues and family members.",
      likes: 47,
      dislikes: 2,
      verified: true,
      categories: ["Forex Trading", "Automated"],
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      readTime: "4 min read",
      comments: 12
    },
    {
      id: 2,
      name: "Nomsa Dlamini",
      location: "Durban, KZN",
      date: "28 February 2026",
      rating: 5,
      title: "Finally something that actually works",
      content: "I've tried numerous trading bots over the years, most were disappointing. ChartLord AI is different. The setup was simple and the support team was helpful when I had questions. My account is up 34% in two months. My husband is now using it too. The best part is that I don't need to stare at charts all day. I just check my phone once a day to see the progress. This has given me time to focus on my business while my money works for me.",
      likes: 38,
      dislikes: 1,
      verified: true,
      categories: ["Beginner Friendly", "Support"],
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      readTime: "3 min read",
      comments: 8
    },
    {
      id: 3,
      name: "Sipho Zulu",
      location: "Pretoria, Gauteng",
      date: "25 February 2026",
      rating: 4,
      title: "Solid performance, minor learning curve",
      content: "Took me about a week to understand how to set it up properly. Once configured, it runs smoothly. I'm seeing consistent 5-8% weekly returns. Would recommend starting with their tutorial videos first. The only reason I'm not giving 5 stars is because the educational resources could be more extensive for beginners. Once you get past the initial learning curve, it's smooth sailing. The community forum is helpful and the developers are actively improving the platform.",
      likes: 22,
      dislikes: 3,
      verified: true,
      categories: ["Learning Curve"],
      imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
      readTime: "5 min read",
      comments: 15
    },
    {
      id: 4,
      name: "Lerato Molefe",
      location: "Cape Town, Western Cape",
      date: "20 February 2026",
      rating: 5,
      title: "Perfect for busy professionals",
      content: "As a doctor working long shifts, I don't have time to watch charts. ChartLord AI does everything for me. I've made R15,000 in profit over 4 months with minimal effort. The withdrawal process is quick and hassle-free. I was initially worried about security, but the platform uses bank-level encryption and my funds are always accessible. The automated system works while I'm saving lives at the hospital. It's truly a game-changer for people with demanding careers.",
      likes: 56,
      dislikes: 0,
      verified: true,
      categories: ["Passive Income", "Professionals"],
      imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      readTime: "4 min read",
      comments: 21
    },
    {
      id: 5,
      name: "Kagiso Modise",
      location: "Soweto, Gauteng",
      date: "18 February 2026",
      rating: 3,
      title: "Good but not perfect",
      content: "It works, but there were some drawdowns in January that worried me. Overall still profitable (about 12% in 2 months), but I wish the risk management was more conservative. I've adjusted settings and it's better now. The platform is transparent about risks and provides good analytics. I appreciate that they don't promise unrealistic returns. It's a solid tool, but you need to understand that all trading involves risk. Start small and learn how it works before investing significant amounts.",
      likes: 15,
      dislikes: 8,
      verified: true,
      categories: ["Risk Management"],
      imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
      readTime: "4 min read",
      comments: 9
    },
    {
      id: 6,
      name: "Precious Nkosi",
      location: "Nelspruit, Mpumalanga",
      date: "15 February 2026",
      rating: 5,
      title: "My kids' school fees are sorted",
      content: "I started with R3,000 just to test. After 3 months, I withdrew R8,000 to pay for school uniforms and books. This is real. I tell all my friends about ChartLord AI now. As a single mother, this has been a lifeline. I don't have to worry about unexpected expenses anymore. The platform is easy to use on my phone and the customer service is excellent when I need help. I'm now saving up for a down payment on a house. Thank you ChartLord AI!",
      likes: 72,
      dislikes: 1,
      verified: true,
      categories: ["Life Changing", "Parents"],
      imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
      readTime: "3 min read",
      comments: 32
    },
    {
      id: 7,
      name: "Johan van der Merwe",
      location: "Bloemfontein, Free State",
      date: "10 February 2026",
      rating: 4,
      title: "Solid automated trading solution",
      content: "I've been trading manually for 8 years. ChartLord AI handles about 60% of my portfolio now. It doesn't replace human judgment entirely but it's an excellent assistant. Good technology. The algorithm catches opportunities I might miss and removes emotional decision-making from the process. I've seen more consistent returns since delegating part of my trading to the AI. It's not a magic bullet, but it's a powerful tool in any trader's arsenal.",
      likes: 29,
      dislikes: 2,
      verified: true,
      categories: ["Experienced Traders"],
      imageUrl: "https://randomuser.me/api/portraits/men/52.jpg",
      readTime: "5 min read",
      comments: 14
    }
  ];

  // Handle like button click
  const handleLike = (reviewId) => {
    setReviews(prevReviews => {
      const updatedReviews = prevReviews.map(review => {
        if (review.id === reviewId) {
          const currentLiked = likedReviews[reviewId]?.active || false;
          const currentDisliked = dislikedReviews[reviewId]?.active || false;
          
          if (currentLiked) {
            setLikedReviews(prev => ({
              ...prev,
              [reviewId]: { active: false, count: review.likes - 1 }
            }));
            return { ...review, likes: review.likes - 1 };
          }
          
          if (currentDisliked) {
            setDislikedReviews(prev => ({
              ...prev,
              [reviewId]: { active: false, count: review.dislikes - 1 }
            }));
            setLikedReviews(prev => ({
              ...prev,
              [reviewId]: { active: true, count: review.likes + 1 }
            }));
            return { 
              ...review, 
              likes: review.likes + 1,
              dislikes: review.dislikes - 1 
            };
          }
          
          setLikedReviews(prev => ({
            ...prev,
            [reviewId]: { active: true, count: review.likes + 1 }
          }));
          return { ...review, likes: review.likes + 1 };
        }
        return review;
      });
      return updatedReviews;
    });
  };

  // Handle dislike button click
  const handleDislike = (reviewId) => {
    setReviews(prevReviews => {
      const updatedReviews = prevReviews.map(review => {
        if (review.id === reviewId) {
          const currentDisliked = dislikedReviews[reviewId]?.active || false;
          const currentLiked = likedReviews[reviewId]?.active || false;
          
          if (currentDisliked) {
            setDislikedReviews(prev => ({
              ...prev,
              [reviewId]: { active: false, count: review.dislikes - 1 }
            }));
            return { ...review, dislikes: review.dislikes - 1 };
          }
          
          if (currentLiked) {
            setLikedReviews(prev => ({
              ...prev,
              [reviewId]: { active: false, count: review.likes - 1 }
            }));
            setDislikedReviews(prev => ({
              ...prev,
              [reviewId]: { active: true, count: review.dislikes + 1 }
            }));
            return { 
              ...review, 
              likes: review.likes - 1,
              dislikes: review.dislikes + 1 
            };
          }
          
          setDislikedReviews(prev => ({
            ...prev,
            [reviewId]: { active: true, count: review.dislikes + 1 }
          }));
          return { ...review, dislikes: review.dislikes + 1 };
        }
        return review;
      });
      return updatedReviews;
    });
  };

  // Handle comment submission
  const handleCommentSubmit = (reviewId) => {
    if (!newComment.trim() || !commentName.trim()) return;
    
    const comment = {
      id: Date.now(),
      name: commentName,
      text: newComment,
      date: new Date().toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    
    setReviewComments(prev => ({
      ...prev,
      [reviewId]: [...(prev[reviewId] || []), comment]
    }));
    
    setNewComment('');
    setCommentName('');
  };

  // Handle new review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    
    if (!newReview.name || !newReview.location || !newReview.title || !newReview.content) {
      setSubmitMessage('Please fill in all required fields');
      return;
    }
    
    const review = {
      id: Date.now(),
      name: newReview.name,
      location: newReview.location,
      date: new Date().toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }),
      rating: newReview.rating,
      title: newReview.title,
      content: newReview.content,
      likes: 0,
      dislikes: 0,
      verified: false,
      categories: newReview.categories,
      imageUrl: `https://ui-avatars.com/api/?name=${newReview.name.replace(' ', '+')}&background=00b67a&color=fff&size=100`,
      readTime: `${Math.ceil(newReview.content.split(' ').length / 200)} min read`,
      comments: 0
    };
    
    setReviews(prev => [review, ...prev]);
    setShowReviewForm(false);
    setNewReview({
      name: '',
      location: '',
      rating: 5,
      title: '',
      content: '',
      categories: []
    });
    setSubmitMessage('');
  };

  // Handle read more toggle
  const toggleReadMore = (reviewId) => {
    setExpandedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  // Handle save article
  const toggleSaveArticle = (reviewId) => {
    setSavedArticles(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  // Handle share article
  const handleShare = (review) => {
    if (navigator.share) {
      navigator.share({
        title: review.title,
        text: review.content.substring(0, 100) + '...',
        url: window.location.href,
      });
    } else {
      alert('Share this article: ' + review.title);
    }
  };

  // Add category to new review
  const addCategory = () => {
    if (selectedCategory && !newReview.categories.includes(selectedCategory)) {
      setNewReview(prev => ({
        ...prev,
        categories: [...prev.categories, selectedCategory]
      }));
      setSelectedCategory('');
    }
  };

  // Remove category from new review
  const removeCategory = (category) => {
    setNewReview(prev => ({
      ...prev,
      categories: prev.categories.filter(c => c !== category)
    }));
  };

  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1) 
    : '0.0';
  
  // Rating counts
  const ratingCounts = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length
  };

  // Filter and sort reviews
  const filteredReviews = reviews
    .filter(review => 
      (filterRating === 0 || review.rating === filterRating) &&
      (searchTerm === '' || 
        review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.title.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'recent') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'helpful') return b.likes - a.likes;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const displayedReviews = filteredReviews.slice(0, visibleReviews);

  // Star rating component
  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="star-filled" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="star-half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-empty" />);
      }
    }
    return <div className="star-rating">{stars}</div>;
  };

  // Truncate content for preview
  const truncateContent = (content, isExpanded) => {
    if (isExpanded) return content;
    const words = content.split(' ');
    if (words.length > 50) {
      return words.slice(0, 50).join(' ') + '...';
    }
    return content;
  };

  return (
    <>
      <Helmet>
        <title>ChartLord AI News & Reviews | South African Traders Share Their Experiences</title>
        <meta name="description" content="Latest news, reviews, and success stories from South African traders using ChartLord AI. Real experiences, honest feedback, and expert insights." />
        <meta name="keywords" content="ChartLord AI reviews, forex trading South Africa, automated trading news, trading bot South Africa, trading success stories" />
        <meta property="og:title" content="ChartLord AI South Africa - News & Reviews" />
        <meta property="og:description" content="Real news and reviews from real South African traders" />
        <link rel="canonical" href="https://yourblog.com/chartlord-sa-news" />
      </Helmet>

      <div className="news-wrapper">
        {/* Top Breaking Bar */}
        <div className="breaking-bar">
          <div className="container">
            <span className="breaking-label">BREAKING</span>
            <span className="breaking-text">ChartLord AI hits 15,000 users in South Africa • New feature release next week • Success stories flooding in</span>
          </div>
        </div>

        {/* News Header */}
        <header className="news-header">
          <div className="container">
            <div className="header-top">
              <h1 className="news-title">
                <FaNewspaper className="news-icon" />
                ChartLord AI <span>South Africa</span>
              </h1>
              <div className="header-actions">
                <button 
                  className="write-review-header-btn"
                  onClick={() => setShowReviewForm(true)}
                >
                  Write a Review
                </button>
                <a href={affiliateLink} className="cta-button-header" target="_blank" rel="noopener noreferrer">
                  Get ChartLord AI
                </a>
              </div>
            </div>
            
            {/* Navigation Tabs */}
            <nav className="news-nav">
              <a href="#" className="active">Latest News</a>
              <a href="#">Success Stories</a>
              <a href="#">Reviews</a>
              <a href="#">Guides</a>
              <a href="#">Interviews</a>
              <a href="#">Opinions</a>
            </nav>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="main-grid">
          <div className="container">
            <div className="grid-layout">
              {/* Left Column - Main Content */}
              <div className="main-content">
                {/* Filter Bar */}
                <div className="filter-bar">
                  <div className="filter-grid">
                    <div className="search-box">
                      <input
                        type="text"
                        placeholder="Search news and reviews..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                      />
                    </div>

                    <div className="filter-options">
                      <select 
                        className="filter-select"
                        value={filterRating}
                        onChange={(e) => setFilterRating(parseInt(e.target.value))}
                      >
                        <option value={0}>All Ratings</option>
                        <option value={5}>5 Stars</option>
                        <option value={4}>4 Stars</option>
                        <option value={3}>3 Stars</option>
                        <option value={2}>2 Stars</option>
                        <option value={1}>1 Star</option>
                      </select>

                      <select 
                        className="filter-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option value="recent">Most Recent</option>
                        <option value="helpful">Most Helpful</option>
                        <option value="rating">Highest Rated</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Rating Summary Card */}
                <div className="rating-summary-card">
                  <div className="rating-summary-content">
                    <div className="rating-score">
                      <span className="big-score">{averageRating}</span>
                      <span className="score-max">/5</span>
                      <div className="rating-stars">
                        <StarRating rating={parseFloat(averageRating)} />
                      </div>
                      <span className="total-reviews">{reviews.length} reviews</span>
                    </div>
                    <div className="rating-bars-compact">
                      {[5,4,3,2,1].map(rating => (
                        <div key={rating} className="rating-bar-item">
                          <span className="bar-label">{rating}★</span>
                          <div className="bar-track">
                            <div 
                              className="bar-progress" 
                              style={{ width: reviews.length > 0 ? `${(ratingCounts[rating] / reviews.length) * 100}%` : '0%' }}
                            ></div>
                          </div>
                          <span className="bar-count">{ratingCounts[rating]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reviews Grid */}
                {displayedReviews.length > 0 ? (
                  <div className="news-grid">
                    {displayedReviews.map(review => (
                      <article key={review.id} className={`news-article rating-${review.rating}`}>
                        {/* Article Header */}
                        <div className="article-header">
                          <div className="article-meta">
                            <span className="article-category">{review.categories[0]}</span>
                            <span className="article-date">{review.date}</span>
                            <span className="article-read-time">{review.readTime}</span>
                          </div>
                          <div className="article-actions">
                            <button 
                              className={`save-btn ${savedArticles[review.id] ? 'saved' : ''}`}
                              onClick={() => toggleSaveArticle(review.id)}
                            >
                              {savedArticles[review.id] ? <FaBookmark /> : <FaRegBookmark />}
                            </button>
                            <button 
                              className="share-btn"
                              onClick={() => handleShare(review)}
                            >
                              <FaShare />
                            </button>
                          </div>
                        </div>

                        {/* Author Info */}
                        <div className="author-info">
                          <div className="author-avatar">
                            <img 
                              src={review.imageUrl} 
                              alt={review.name}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://ui-avatars.com/api/?name=${review.name.replace(' ', '+')}&background=00b67a&color=fff&size=100`;
                              }}
                            />
                          </div>
                          <div className="author-details">
                            <h3 className="author-name">{review.name}</h3>
                            <p className="author-location">{review.location}</p>
                            {review.verified && (
                              <span className="verified-badge-small">
                                <FaCheckCircle /> Verified
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Article Title */}
                        <h2 className="article-title">{review.title}</h2>

                        {/* Rating */}
                        <div className="article-rating">
                          <StarRating rating={review.rating} />
                        </div>

                        {/* Article Content with Read More */}
                        <div className="article-content">
                          <p>
                            {truncateContent(review.content, expandedReviews[review.id])}
                          </p>
                          {review.content.split(' ').length > 50 && (
                            <button 
                              className="read-more-btn"
                              onClick={() => toggleReadMore(review.id)}
                            >
                              {expandedReviews[review.id] ? 'Show Less' : 'Read More'}
                            </button>
                          )}
                        </div>

                        {/* Categories */}
                        <div className="article-categories">
                          {review.categories.map((cat, idx) => (
                            <span key={idx} className="category-pill">{cat}</span>
                          ))}
                        </div>

                        {/* Engagement Bar */}
                        <div className="engagement-bar">
                          <div className="engagement-stats">
                            <button 
                              className={`stat-btn like-btn ${likedReviews[review.id]?.active ? 'active' : ''}`}
                              onClick={() => handleLike(review.id)}
                            >
                              <FaThumbsUp /> {review.likes}
                            </button>
                            <button 
                              className={`stat-btn dislike-btn ${dislikedReviews[review.id]?.active ? 'active' : ''}`}
                              onClick={() => handleDislike(review.id)}
                            >
                              <FaThumbsDown /> {review.dislikes}
                            </button>
                            <button 
                              className="stat-btn comment-btn"
                              onClick={() => setActiveCommentBox(
                                activeCommentBox === review.id ? null : review.id
                              )}
                            >
                              <FaRegCommentDots /> {reviewComments[review.id]?.length || 0}
                            </button>
                          </div>
                        </div>

                        {/* Comments Section */}
                        {activeCommentBox === review.id && (
                          <div className="comments-section">
                            <h4>Comments ({reviewComments[review.id]?.length || 0})</h4>
                            
                            {/* Existing Comments */}
                            {reviewComments[review.id]?.map(comment => (
                              <div key={comment.id} className="comment">
                                <div className="comment-header">
                                  <strong>{comment.name}</strong>
                                  <span className="comment-date">{comment.date}</span>
                                </div>
                                <p>{comment.text}</p>
                              </div>
                            ))}
                            
                            {/* Add Comment Form */}
                            <div className="add-comment">
                              <input
                                type="text"
                                placeholder="Your name"
                                value={commentName}
                                onChange={(e) => setCommentName(e.target.value)}
                                className="comment-input"
                              />
                              <textarea
                                placeholder="Write a comment..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="comment-textarea"
                              />
                              <button 
                                className="comment-submit"
                                onClick={() => handleCommentSubmit(review.id)}
                              >
                                Post Comment
                              </button>
                            </div>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="no-results">
                    <FaExclamationTriangle />
                    <h3>No articles match your filters</h3>
                    <p>Try adjusting your search criteria</p>
                  </div>
                )}

                {/* Load More */}
                {visibleReviews < filteredReviews.length && (
                  <div className="load-more">
                    <button 
                      className="load-more-btn"
                      onClick={() => setVisibleReviews(prev => prev + 3)}
                    >
                      Load More Articles
                    </button>
                  </div>
                )}
              </div>

              {/* Right Sidebar - Ads and Popular */}
              <div className="sidebar">
                {/* Ad Space 1 */}
                <div className="ad-card">
                  <div className="ad-label">ADVERTISEMENT</div>
                  <div className="ad-content">
                    <FaAd className="ad-icon" />
                    <h3>Start Trading Today</h3>
                    <p>Join hundreds of successful South African traders</p>
                    <a href={affiliateLink} className="ad-button" target="_blank" rel="noopener noreferrer">
                      Get ChartLord AI
                    </a>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="stats-card">
                  <h3>Community Stats</h3>
                  <div className="stat-item">
                    <span className="stat-label">Total Reviews</span>
                    <span className="stat-value">{reviews.length}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">5-Star Reviews</span>
                    <span className="stat-value">{ratingCounts[5]}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Success Stories</span>
                    <span className="stat-value">{reviews.filter(r => r.rating >= 4).length}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Active Users</span>
                    <span className="stat-value">15K+</span>
                  </div>
                </div>

                {/* Popular Articles */}
                <div className="popular-card">
                  <h3>Most Read</h3>
                  {reviews.slice(0, 3).map((review, idx) => (
                    <div key={review.id} className="popular-item" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      <span className="popular-rank">{idx + 1}</span>
                      <div className="popular-content">
                        <h4>{review.title}</h4>
                        <p>{review.name} • {review.readTime}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ad Space 2 */}
                <div className="ad-card ad-compact">
                  <div className="ad-label">SPONSORED</div>
                  <div className="ad-content">
                    <h4>ChartLord AI</h4>
                    <p>Automated trading that works</p>
                    <a href={affiliateLink} className="ad-link" target="_blank" rel="noopener noreferrer">
                      Learn more →
                    </a>
                  </div>
                </div>

                {/* Categories */}
                <div className="categories-card">
                  <h3>Categories</h3>
                  <div className="categories-list">
                    {availableCategories.slice(0, 8).map(cat => (
                      <button 
                        key={cat} 
                        className="category-chip"
                        onClick={() => setSearchTerm(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Form Modal */}
        {showReviewForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button 
                className="modal-close"
                onClick={() => setShowReviewForm(false)}
              >
                <FaTimes />
              </button>
              
              <h2>Write Your Review</h2>
              
              <form onSubmit={handleReviewSubmit}>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    placeholder="e.g. John Dlamini"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Location *</label>
                  <input
                    type="text"
                    value={newReview.location}
                    onChange={(e) => setNewReview({...newReview, location: e.target.value})}
                    placeholder="e.g. Johannesburg, Gauteng"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Rating *</label>
                  <div className="rating-selector">
                    {[1,2,3,4,5].map(star => (
                      <span
                        key={star}
                        className={`rating-star ${star <= newReview.rating ? 'selected' : ''}`}
                        onClick={() => setNewReview({...newReview, rating: star})}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Review Title *</label>
                  <input
                    type="text"
                    value={newReview.title}
                    onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                    placeholder="Summarize your experience"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Your Review *</label>
                  <textarea
                    value={newReview.content}
                    onChange={(e) => setNewReview({...newReview, content: e.target.value})}
                    placeholder="Share your experience with ChartLord AI..."
                    rows="5"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Categories (optional)</label>
                  <div className="category-selector">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">Select a category</option>
                      {availableCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <button 
                      type="button" 
                      className="add-category-btn"
                      onClick={addCategory}
                    >
                      Add
                    </button>
                  </div>
                  
                  <div className="selected-categories">
                    {newReview.categories.map(cat => (
                      <span key={cat} className="category-tag">
                        {cat}
                        <button onClick={() => removeCategory(cat)}>×</button>
                      </span>
                    ))}
                  </div>
                </div>
                
                {submitMessage && (
                  <div className="submit-message error">{submitMessage}</div>
                )}
                
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={() => setShowReviewForm(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Publish Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="news-footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">
                <h3>ChartLord AI <span>South Africa</span></h3>
                <p>Real news, real reviews, real success stories</p>
              </div>
              <div className="footer-links">
                <a href="/">Home</a>
                <a href="/latest">Latest</a>
                <a href="/reviews">Reviews</a>
                <a href={affiliateLink}>Get ChartLord AI</a>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="disclaimer">
                Disclaimer: Trading involves risk. Past performance does not guarantee future results.
                This is a news and review blog. Individual experiences may vary.
              </p>
              <p className="copyright">
                © 2026 ChartLord AI South Africa News. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TrustPilotReviews;