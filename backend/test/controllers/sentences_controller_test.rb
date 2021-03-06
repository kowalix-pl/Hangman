require "test_helper"

class SentencesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sentence = sentences(:one)
  end

  test "should get index" do
    get sentences_url, as: :json
    assert_response :success
  end

  test "should create sentence" do
    assert_difference('Sentence.count') do
      post sentences_url, params: { sentence: { text: @sentence.text } }, as: :json
    end

    assert_response 201
  end

  test "should show sentence" do
    get sentence_url(@sentence), as: :json
    assert_response :success
  end

  test "should update sentence" do
    patch sentence_url(@sentence), params: { sentence: { text: @sentence.text } }, as: :json
    assert_response 200
  end

  test "should destroy sentence" do
    assert_difference('Sentence.count', -1) do
      delete sentence_url(@sentence), as: :json
    end

    assert_response 204
  end
end
